import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Chào mừng quay trở lại</CardTitle>
          <CardDescription>
            Điền thông tin để đăng nhập vào trang quản trị
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="min-w-[350px]">
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Tài khoản</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Nhập tài khoản của bạn"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mật khẩu</Label>
                  </div>
                  <Input id="password" type="password" placeholder="Nhập mật khẩu" required />
                </div>
                <Button type="submit" className="w-full">
                  Đăng nhập
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}
