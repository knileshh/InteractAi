export default function TechStack() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Tech Stack & Tools Used
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            We used React.js as the frontend Framework, JavaScript for the interactions and backend, Tailwind CSS for the UI and design, HTML and many more...
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE4xktqBeD9_GV397E85ckF-CS7Or4peRNC173fqjFA&s"
                                                    alt=""
                                                    className="h-2/3 w-full object-contain"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                                                    alt=""
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://logowik.com/content/uploads/images/intellij-idea286.logowik.com.webp"
                                                    alt=""
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://i0.wp.com/www.setblue.com/wp-content/uploads/2022/02/node.png?w=1000&ssl=1"
                                                    alt=""
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://media.licdn.com/dms/image/D4E12AQHfSWXTymm4VA/article-cover_image-shrink_600_2000/0/1695299723277?e=2147483647&v=beta&t=k0oOD_n5zjaGevp72SKt4vFaW7DvHtrwbdIyb2eP0GA"
                                                    alt=""
                                                    className="h-2/3 w-full object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Q_dcVCakw3M6P-fGcXBNfVI8AfGa7eD30p4gFw36Cg&s"
                                                    alt=""
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-red-600 px-8 py-3 text-center font-medium text-white hover:bg-red-700"
                            >
                                Read the Docs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
