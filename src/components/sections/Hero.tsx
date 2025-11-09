export default function Hero() {
    return (
        <section className="">
            <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
                <div className="max-w-7xl w-full">
                    <div className="lg:pb-20">
                        <div className="h-screen w-full bg-primary bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"><div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div></div>

                        <div className="flex justify-center relative z-9">
                            <div className="container mx-auto h-full">
                                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                                    <div className="text-center xl:text-left order-2 xl:order-none">
                                        <span className="text-xl">Software Engineer</span>
                                        <h1 className="h1 mb-6">
                                            Hello I'm
                                            <br />
                                            <span className="text-accent">
                                                Akshay <br />Singh Chauhan
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}