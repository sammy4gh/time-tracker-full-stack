import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

function Categories() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Categories</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        CategoryList.map((category) => (
                            <DropdownMenuItem key={category.id}>
                                {category.name}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Categories;

const CategoryList = [
    {
        id: 1,
        name: 'Projects'
    },
    {
        id: 2,
        name: 'Holidays'
    },
    {
        id: 3,
        name: 'Leave'
    },


]
