import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="grid items-start gap-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold md:text-4xl">Налаштування</h1>
          <p className="text-lg text-muted-foreground">Налаштування профілю</p>
        </div>
      </div>
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Загальні дані</CardTitle>
            <CardDescription>Надайте загальні дані про себе</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label>Ваше ім'я</Label>
                <Input name="name" type="text" id="name" placeholder="Ваше ім'я" />
              </div>
              <div className="space-y-2">
                <Label>Ваш адрес ел. пошти</Label>
                <Input name="email" type="email" id="email" placeholder="Електронна пошта" />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button>Зберегти налаштування</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
