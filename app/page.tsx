import { TeacherCard, Hero } from "@/components";
import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mt-[10rem]" id="discover">
        <section>
          <div className="flex flex-col mt-[10rem]">
            <div className="flex xl:flex-row flex-col gap-[6rem] items-center">
              <div>
                <h2 className="hero__title">Удобно и Продуктивно</h2>
              </div>
              <div className="mt-5">
                <p className="text-2xl">
                  Расписание занятий составляется с учётом предпочтений
                  студента. Занятия не будут мешать работе или учёбе, но
                  одновременно с этим будут максимально продуктивными.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/student__image-1.JPG"
                alt="teacher__image"
                width={1920}
                height={1080}
                className="rounded mt-[6rem] mx-auto"
              />
            </div>
          </div>

          <div className="mt-[7rem]">
            <div className="flex xl:flex-row xl:gap-0 flex-col gap-[3rem] items-center justify-between">
              <div className="bg-box_student-1 rounded-lg bg-cover p-[1rem] w-[400px] h-[400px]">
                <h2 className="text-[34px] text-white font-extrabold">
                  Доступность
                </h2>
                <p className="text-[20px] text-white font-bold mt-5">
                  Начать обучаться могут как носители языка, чтобы улучшать
                  владение им и развивать его дальше, так и люди с нулевым
                  уровнем. Это значит, что уроки подойдут всем, детям и взрослым
                </p>
              </div>
              <div className="bg-box_student-2 rounded-lg bg-cover p-[1rem] w-[400px] h-[400px]">
                <h2 className="text-[34px] text-white font-extrabold">
                  Профессионализм
                </h2>
                <p className="text-[20px] text-white font-bold mt-5">
                  Наши преподаватели являются высококвалифицированными
                  специалистами с годами опыта. Они умеют найти наилучший подход
                  к обучению и учитывают индивидуальность студентов
                </p>
              </div>
              <div className="bg-box_student-3 rounded-lg bg-cover p-[1rem] w-[400px] h-[400px]">
                <h2 className="text-[34px] text-white font-extrabold">
                  Поддержка
                </h2>
                <p className="text-[20px] text-white font-bold mt-5">
                  Преподаватели всегда находятся на связи со студентами, даже
                  внерабочее время. Они отвечают на различные вопросы, а также
                  помогают с домашним заданием
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[10rem]">
            <div className="home__text-container mt-5">
              <h1 className="text-5xl font-extrabold">Наши Учителя</h1>
            </div>
            <div className="home__cars-wrapper mb-20">
              <TeacherCard
                name="Медина"
                age="25 лет"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="3 года"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-3.png"
              />
              <TeacherCard
                name="Турпал"
                age="34 года"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="10 лет"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-2.png"
              />
              <TeacherCard
                name="Адам"
                age="30 лет"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="9 лет"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-6.png"
              />
              <TeacherCard
                name="Ризван"
                age="28 лет"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="7 лет"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-1.png"
              />
              <TeacherCard
                name="Амина"
                age="27 лет"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="5 лет"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-5.png"
              />
              <TeacherCard
                name="Карина"
                age="22 года"
                phone="+7 928-643-25-83"
                email="teacher228@gmail.com"
                experience="3 года"
                position="Учитель Чеченского Языка"
                image="/teacher_card-image-4.png"
              />
            </div>
          </div>

          <div className="mt-[7rem]">
            <h2 className="text-center xl:text-start hero__title mb-[4rem]">
              Курсы
            </h2>
            <div className="flex xl:flex-row xl:gap-0 flex-col gap-[3rem] items-center justify-between">
              <a href="#form">
                <div className="bg-box_student-4 rounded-lg bg-cover p-[1rem] xl:w-[500px] xl:h-[600px] w-[350px] h-[450px] cursor-pointer hover:translate-y-[-14px] transition-transform">
                  <h2 className="text-[34px] text-white font-extrabold">
                    Начинающий
                  </h2>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Подойдет для тех, кто только начинает изучение языка.
                  </p>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Цена: 3000 руб/месяц
                  </p>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Продолжительность: 6 МЕСЯЦЕВ
                  </p>
                </div>
              </a>

              <a href="#form">
                <div className="bg-box_student-5 rounded-lg bg-cover p-[1rem] xl:w-[500px] xl:h-[600px] w-[350px] h-[450px] cursor-pointer hover:translate-y-[-14px] transition-transform">
                  <h2 className="text-[34px] text-white font-extrabold">
                    Продвинутый
                  </h2>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Подойдет для тех, кто хочет улучшить владение языком и
                    довести его до идеала.
                  </p>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Цена: 5000 руб/месяц
                  </p>
                  <p className="text-[20px] text-white font-bold mt-5">
                    Продолжительность: 1 ГОД
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-[10rem]" id="form">
            <h2 className="text-center xl:text-start hero__title mb-[4rem]">
              Запишитесь на курс
            </h2>
            <div className="flex flex-col xl:flex-row items-center justify-between gap-[3rem]">
              <Image
                src="/form-image.jpg"
                alt="form image"
                width={700}
                height={800}
                className="rounded-md xl:flex hidden"
              />
              <div className="flex justify-end">
                <Form firstname="" lastname="" phone="" email="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
