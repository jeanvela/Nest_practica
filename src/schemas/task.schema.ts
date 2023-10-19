import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Task {
    @Prop({unique: true, required: true})
    title: string

    @Prop({required: true})
    description: string

    @Prop({default: false})
    done: boolean
}

export const TaskSchema =  SchemaFactory.createForClass(Task)