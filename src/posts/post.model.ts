import { getModelForClass, prop } from "@typegoose/typegoose";

/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 21:18:34
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 21:21:28
 * @FilePath: \src\posts\post.model.ts
 */
export class Post {
    @prop()
    title:string

    @prop()
    content:string
}

export const PostModel=getModelForClass(Post)