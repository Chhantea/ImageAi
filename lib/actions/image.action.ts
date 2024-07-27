'use server';

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../dataBase/mongoose";
import { handleError } from "../utils";
import User from "../dataBase/models/user.mode";
import Image from "../dataBase/models/image.model";
import { redirect } from "next/navigation";

const populateUser = (query:any) => query.populate({
    path:'author',
    model: User,
    select: "_id,firstName,lastName",

})
// add or create
export async function addImage({image,userId,path}:AddImageParams){
    try{
        await connectToDatabase();
        const author = await User.findById(userId);
        if(!author){
            throw new Error("User not found"); 
        }
        const newImage =await Image.create({
            ...Image,
            author:author._id,
        })
        revalidatePath(path);
        return JSON.parse(JSON.stringify(newImage));

    }catch(error){
        handleError(error);
    }
}

//  update 
export async function updateImage({image,userId,path}:UpdateImageParams){
    try{
        await connectToDatabase();
        const imageToUpdate = await Image.findById(image._id);
        if(!imageToUpdate || imageToUpdate.author.toHaxString() !== userId ){
            throw new Error("Unauthorized! or Image not found"); 
        }
        const updateImage = await Image.findByIdAndUpdate(
            imageToUpdate._id,
            image,
            {new:true}
        )
        revalidatePath(path);
        return JSON.parse(JSON.stringify(updateImage));
        
    }catch(error){
        handleError(error);
    }
}

//  delete 
export async function deleteImage(imageId:string){
    try{
        await connectToDatabase();
       await Image.findByIdAndDelete(imageId);
        
    }catch(error){
        handleError(error);
    } finally {
        redirect('/');
    }
}

// get image 
export async function getImageById(imageId:string){
    try{
        await connectToDatabase();
        const image = await populateUser(Image.findById(imageId));
        if(!image){
            throw new Error("Image not found"); 
        }
        // revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
        
    }catch(error){
        handleError(error);
    }
}

