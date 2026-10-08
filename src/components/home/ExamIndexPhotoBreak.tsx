import Image from "next/image";

// 시험명만 나열되는 구간(Credibility Strip → EXAM INDEX) 사이를 사진 한 장으로 끊어줍니다.
export default function ExamIndexPhotoBreak() {
  return (
    <section className="img-fade" aria-hidden="true">
      <div className="relative aspect-[4/3] w-full md:aspect-[16/9]">
        <Image
          src="/images/library-reading.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />
      </div>
    </section>
  );
}
