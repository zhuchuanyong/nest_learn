/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 16:56:03
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 21:52:45
 * @FilePath: \src\posts\posts.controller.ts
 */
import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

class CreatePostDto {
    @ApiProperty({ description: "帖子标题", example: '帖子标题1' })
    title: string;
    @ApiProperty({ description: "帖子内容", example: '内容1' })
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '显示博客列表' })
    async  index() {
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    async create(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto)
        await PostModel.create(createPostDto)

        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情' })
    async detail(@Param  ("id") id: string) {


        return await PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: '帖子更新' })
    async update(@Param  ("id") id: string,@Body() updatePostDto:CreatePostDto) {

        await PostModel.findByIdAndUpdate(id,updatePostDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '帖子删除' })
    async remove(@Param  ("id") id: string) {

        // await PostModel.findByIdAndRemove(id);
        await PostModel.findByIdAndDelete(id);
        return {
            success: true
        }
    }
}
