import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Footer() {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                    <p className="text-sm text-gray-700">
                    Copyright 2022 © SScars 小施二手車
                    </p>
                </div>
            </div>
        </div>
    );
}
