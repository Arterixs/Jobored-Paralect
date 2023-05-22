import { memo } from 'react';
import { CardJob } from 'components/card-job/Card-job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Search } from 'components/common/search/Search';
import { Pagination } from 'components/pagination/Pagination';
import { useInfoContext } from 'hooks/use-info-context';
import { CardWrapClasses } from 'types/enums/classes';
import { MainPageProps } from 'types/interface/props';
import styles from './main-page.module.css';

export const MainPage = memo(({ funcSearch, funcPage }: MainPageProps) => {
  const {
    state: { listVacancies },
  } = useInfoContext();
  return (
    <section className={styles.main_page}>
      <section className={styles.section}>
        <Search funcSearch={funcSearch} />
        <section className={styles.section}>
          {listVacancies.map((item) => (
            <CardWrapper className={CardWrapClasses.CARD} key={item.id}>
              <CardJob
                location={item.town.title}
                title={item.profession}
                salaryFrom={item.payment_from}
                salaryTo={item.payment_to}
                currency={item.currency}
                conditions={item.type_of_work.title}
                id={item.id}
              />
            </CardWrapper>
          ))}
        </section>
      </section>
      <Pagination funcPage={funcPage} />
    </section>
  );
});
