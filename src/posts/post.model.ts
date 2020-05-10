import { prop } from "@typegoose/typegoose";

/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 21:18:34
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 22:53:51
 * @FilePath: \src\posts\post.model.ts
 */
// Post 就是表名称  posts
export class Post {
    @prop()
    title:string

    @prop()
    content:string
}
