/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 16:56:03
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 23:01:35
 * @FilePath: \src\posts\posts.controller.ts
 */
import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto {
    @ApiProperty({ description: "帖子标题", example: '帖子标题1' })
    @IsNotEmpty({message:'标题不能为空'})
    title: string;
    @ApiProperty({ description: "帖子内容", example: '内容1' })
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly PostModel:ModelType<PostSchema>
    ){}
    
    @Get()
    @ApiOperation({ summary: '显示博客列表' })
    async  index() {
        return await this.PostModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    async create(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto)
        await this.PostModel.create(createPostDto)

        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情' })
    async detail(@Param  ("id") id: string) {
        return await this.PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: '帖子更新' })
    async update(@Param  ("id") id: string,@Body() updatePostDto:CreatePostDto) {
        await this.PostModel.findByIdAndUpdate(id,updatePostDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '帖子删除' })
    async remove(@Param  ("id") id: string) {
        await this.PostModel.findByIdAndDelete(id);
        return {
            success: true
        }
    }
}
