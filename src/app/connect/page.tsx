"use client";
import Link from "next/link"
export default function ConnectMe() {
    const handleSubmit = () => {

    }

    return (
        <section className="flex flex-row min-h-screen f px-10 py-20 gap-10 justify-center items-center">
            <div className="w-1/2 h-full flex flex-col gap-10">
                <h4 className="font-bold text-6xl">Connect with me</h4>
                <p className="font-normal text-2xl max-w-120">Message me and forget micromanaging. I move fast, take full charge, and build Websites that’s crisp. Remote, contract, collab - whatever suits you.</p>
                <div className="flex flex-row gap-4 text-xl">
                    <label className="tracking-tighter border-b-2">akshaysinghc230@gmail.com</label>
                    <label className="tracking-tighter border-b-2 cursor-pointer">Book a meeting</label>
                </div>
            </div>

            <div className="w-1/2 h-full flex flex-col gap-10">
                <h3 className="text-4xl font-bold ">Slide into my inbox</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                    <input className="border-b-2 outline-none" type="text" placeholder="Name"/>
                    <input className="border-b-2 outline-none" type="email" placeholder="Email"/>
                    <textarea className="border-b-2 outline-none"  placeholder="Message"/>
                    <button type="submit" className="w-fit border-b-2 cursor-pointer">Submit</button>
                </form>
            </div>
        </section>
    )
}