import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { updateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    findAll() {
        this.taskModel.find()
    }

    async create(createTask: CreateTaskDto) {
        const newTask = new this.taskModel(createTask)
        await newTask.save()
        return newTask
    }

    async findOne(id: string) {
        return this.taskModel.findById(id)
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id)
    }

    async update(id: string, task: updateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, {new: true})  //* Con new en true nos devulve el dato actualizado
    }
}
