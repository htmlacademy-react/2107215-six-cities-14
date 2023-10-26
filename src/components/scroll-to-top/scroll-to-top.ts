import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// SPA мы не загружаем новые документы,
// а просто перерисовываем один и тот же HTML-документ,
// отображая на нём интерфейсы разных страниц,
// поэтому scroll автоматически не сбрасывается.
// Обнулять scroll следует только при открытии новой страницы,
// то есть при изменении pathname, поэтому pathname указано в зависимостях для useEffect
function ScrollToTop(): null {
  const {pathname} = useLocation();

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
