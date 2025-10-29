import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

export default function Header(): React.ReactElement {
    const [code, setCode] = React.useState<string>("");
    const onConfirm = () => { }

    return <header className="border-b flex">
        <div className="w-full grid grid-cols-2 h-16 items-center justify-between px-4 ">
            <div className="flex col-span-1 items-center gap-2">
                {/*<img*/}
                {/*    src="/placeholder.svg"*/}
                {/*    alt="ForLabJP Logo"*/}
                {/*    width={32}*/}
                {/*    height={32}*/}
                {/*    className="rounded-md"*/}
                {/*/>*/}
                <NavLink to="/" className="text-lg font-semibold">
                    <span className="text-xl font-bold">Imodel</span>
                </NavLink>
            </div>

            <div className="hidden lg:flex md:flex col-span-1 gap-6 flex-row-reverse w-full">
                <NavLink to="/login" className="flex items-center">
                    <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
                        Đăng ký / Đăng nhập
                    </div>
                </NavLink>

                <NavLink to="/disco" className="text-sm font-medium hover:underline underline-offset-4">
                    Khám phá
                </NavLink>

            </div>


        </div>

    </header>;
}

