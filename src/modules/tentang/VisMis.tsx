import DefaultLayout from "@/components/layout/DefaultLayout"
import { Batik } from "@/components/archive/BatikBackground"
import { LabelKMTETI } from '@/components/archive/LabelKMTETI'
import { Image } from '@/components/archive/Image'

export default function VisMis() {
    return (
    <section className="relative w-full overflow-hidden" data-aos="fade-up">
        <Batik className="batik-5" isWhite={true} />
        <DefaultLayout>
            {/* Visi Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
                <div className="flex flex-col justify-center">
                    <div className="mb-6 flex justify-start">
                        <LabelKMTETI 
                            type="kmteti-logotype-short-white"
                            isKMTETI={true}
            className="mb-6 justify-center shadow-lg shadow-primary-500/20"
                            kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
                        >
            <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
                                Visi
                            </h2>
                        </LabelKMTETI>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-regular">
                        Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi atau KMTETI merupakan himpunan mahasiswa yang menaungi seluruh mahasiswa Teknik Elektro dan Teknologi Informasi. Kami berkomitmen menjadi ruang tumbuh bagi mahasiswa melalui program kerja yang berdampak, kolaboratif, dan berkelanjutan.
                    </p>
                </div>
                <Image src="/images/landing/hero/hero.webp" alt="Visi KMTETI" />
            </div>

            {/* Misi Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Image src="/images/landing/hero/hero.webp" alt="Misi KMTETI" className="order-2 md:order-1" />
                <div className="flex flex-col justify-center order-1 md:order-2">
                    <div className="mb-6 flex justify-start">
                        <LabelKMTETI 
                            type="kmteti-logotype-short-white"
                            isKMTETI={true}
            className="mb-6 justify-center shadow-lg shadow-primary-500/20"
                            kmtetiProps={{ width: 128, height: 32, className: 'h-8 w-auto' }}
                        >
            <h2 className="text-xl sm:text-2xl font-bold font-sans leading-tight flex flex-row items-center gap-x-2">
                                Misi
                            </h2>
                        </LabelKMTETI>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-regular text-left">
                        Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi atau KMTETI merupakan himpunan mahasiswa yang menaungi seluruh mahasiswa Teknik Elektro dan Teknologi Informasi. Kami berkomitmen menjadi ruang tumbuh bagi mahasiswa melalui program kerja yang berdampak, kolaboratif, dan berkelanjutan.
                    </p>
                </div>
            </div>
        </DefaultLayout>
    </section>
    );
}