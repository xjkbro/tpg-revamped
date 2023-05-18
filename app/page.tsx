import Hero from "@/components/Hero";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const sections = [
    "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1560419284-6c2d2b5e0483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1511311219972-4df5faba0fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
];
export default function Home() {
    return (
        <>
            <Hero />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                {sections.map((item, i) => (
                    <section
                        key={i}
                        className={clsx(
                            i % 2 != 0 ? "bg-gray-400" : "bg-gray-600",
                            "h-[75vh] w-screen flex items-center gap-12 px-28 py-20"
                        )}
                    >
                        <Image
                            src={item}
                            alt="TPG Gaming"
                            width={300}
                            height={300}
                            className={clsx(
                                i % 2 != 0 ? "order-2" : "",
                                "w-1/3 h-96 object-cover"
                            )}
                        />
                        <div className="w-2/3">
                            <h2 className="font-bold text-3xl">
                                Lorem, ipsum.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Similique distinctio
                                reiciendis recusandae ut veniam illo! Animi,
                                neque! Ea iure voluptates voluptate expedita
                                nemo id ex maxime! Quod, quis tempore. Iure odio
                                eligendi commodi, maiores voluptatum similique?
                                Voluptatem iusto suscipit mollitia eum hic quod
                                vero et, neque exercitationem tempore dolorum
                                cum? Quidem doloribus quod velit a porro sed
                                dignissimos incidunt in minus natus voluptatem
                                praesentium itaque numquam sunt, accusantium qui
                                tempore laboriosam. Rem sequi modi corporis
                                natus asperiores, consequatur odit accusantium
                                aliquam earum, maxime atque, omnis nisi facilis
                                quo beatae fugit amet sed provident nam delectus
                                quia. Doloremque rerum molestias officiis enim
                                consectetur exercitationem sint consequuntur in
                                suscipit magnam natus, incidunt repellat sit
                                nesciunt. Mollitia facere assumenda est
                                architecto repellendus rem.
                            </p>
                            <Link href="/test">Read More →</Link>
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}
