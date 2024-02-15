'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import prisma from "@/app/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default function NewNoteRoute() {
  

  

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async () => {
    
    

    try {
      // Получаем значения полей
      const titleValue = title.trim();
      const descriptionValue = description.trim();

      // Проверяем, что поля заполнены
      if (!titleValue || !descriptionValue) {
        console.error("Title and description are required");
        return;
      }

      // Создаем новую запись в базе данных
      await prisma.note.create({
        data: {
          description: descriptionValue,
          title: titleValue,
        },
      });

      // Перенаправляем пользователя на страницу dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error while posting data:", error);
      // Обработка ошибок, например, показ сообщения об ошибке пользователю
    }
  };

  return (
    <Card>
      <div>
        <CardHeader>
          <CardTitle>Нова нотатка</CardTitle>
          <CardDescription>
            Тут ви можете створити нову нотатку
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Назва</Label>
            <Input
              required
              type="text"
              name="title"
              placeholder="Назва вашої нотатки"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Опис</Label>
            <Textarea
              name="description"
              placeholder="Опишіть вашу нотатку"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button asChild variant="destructive">
            <Link href="/dashboard">Відмінити</Link>
          </Button>
          <Button onClick={handleFormSubmit}>Зберегти</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
