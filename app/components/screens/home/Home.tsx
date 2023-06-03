import { getCourseUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { TabPanel, Tabs } from 'react-tabs'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'

import styles from './Home.module.scss'
import PlayerWrapper from './Players'
import { useHome } from './useHome'

const Home = () => {
  const { courses } = useHome()

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Heading title="Тренировки" />
        <PlayerWrapper url="/uploads/default/start2.mp4" />
        <SubHeading title="Выбери курс из разделов ниже и начни свою трансформацию" />
        <Tabs>
          <TabPanel>
            <PlayerWrapper url="/uploads/default/start.mp4" />
            <p className={styles.text}>Выберите курс</p>
            <div className={styles.cards}>
              {courses &&
                courses?.length &&
                courses?.map((course) => (
                  <div className={styles.card} key={course.id}>
                    <Link href={getCourseUrl(String(course.id))}>
                      <Image
                        src={course.image}
                        width={400}
                        height={100}
                        alt="course"
                        draggable={false}
                      />
                      <div className={styles.cardWrapper}>
                        <div className={styles.content}>
                          <p>{course.name}</p>
                          <span>{course.description}</span>
                        </div>
                        <div className={styles.btn}>
                          <p>Подробнее</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Layout>
  )
}
export default Home
