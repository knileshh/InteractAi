import banner1 from "../../../interactAi/banner1.webp"

export default function Section1() {

    return (
        <section className="flex justify-center items-center h-screen relative">
            <div className="grid grid-cols-12 gap-4 z-10 text-white">
                <div className="col-span-10 text-white z-10">
                    <h1 className="text-6xl font-bold">
                        Introducing<br/>
                        Interact Ai<br/>
                    </h1>
                </div>

                <div className="col-span-2">
                    <h2>Just checking the 2nd col</h2>
                </div>
            </div>

            <img
                className="absolute inset-0 m-auto w-4/6 h-4/6 object-cover"
                src={banner1}
                alt="banner1"
            />
        </section>
    );
}