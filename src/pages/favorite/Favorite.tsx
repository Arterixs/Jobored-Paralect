import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routers } from 'types/enums/router';
import { CardJob } from 'components/card-job/Card-job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { CardWrapClasses } from 'types/enums/classes';
import { ArrayVacancies } from 'types/interface/server';
import { useSendFavor } from 'hooks/use-send-favor';
import { Pagination } from 'components/pagination/Pagination';
import { EmptyPage } from 'pages/empty/empty-page';
import { TextContent } from 'types/enums/text';
import { UseErrorContext } from 'hooks/use-loaded-context';
import styles from './favorite.module.css';

export const VacanciesPage = () => {
  const [array, setArray] = useState<ArrayVacancies[]>([]);
  const [event, setEvent] = useState(false);
  const { dispatch } = UseErrorContext();
  const changeStar = useCallback(() => setEvent(!event), [event]);
  const changeArray = useCallback((arr: ArrayVacancies[]) => setArray(arr), []);
  useSendFavor(dispatch, changeArray, event);
  const isEmptyCheck = Boolean(array.length);

  return (
    <main className={styles.main}>
      {isEmptyCheck ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <section className={styles.section}>
              {array.map((item) => (
                <CardWrapper className={CardWrapClasses.CARD} key={item.id}>
                  <Link to={`${Routers.FAVORITE_PAGE}/${item.id}`} className={styles.link}>
                    <CardJob
                      location={item.town.title}
                      title={item.profession}
                      salaryFrom={item.payment_from}
                      salaryTo={item.payment_to}
                      currency={item.currency}
                      conditions={item.type_of_work.title}
                      id={item.id}
                      changeStar={changeStar}
                    />
                  </Link>
                </CardWrapper>
              ))}
            </section>
            <Pagination funcPage={() => {}} />
          </div>
        </div>
      ) : (
        <EmptyPage content={TextContent.EMPTY} />
      )}
    </main>
  );
};
