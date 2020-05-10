/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 16:56:03
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 19:26:56
 * @FilePath: \src\posts\posts.controller.ts
 */
import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
    @ApiProperty({description:"帖子标题"})
    title:string;
    @ApiProperty({description:"帖子内容"})
    content:string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    index() {
        return []
    }

    @Post()
    @ApiOperation({summary:'创建帖子'})
    create( @Body() body:CreatePostDto) {
        console.log(body)
       
        return {
            success: true
        }
    }

    @Get(':id')
    detail(@Body() body ,@Query() query,@Param() params){
        console.log(body)
        console.log(query)
        console.log(params)
        return {
            id:1,
            title:'wwww2'
        }
    }
}
