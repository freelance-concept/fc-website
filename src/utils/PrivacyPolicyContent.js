import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';

const PrivacyContent = styled.section`
  p {
    line-height: 110%;
    font-weight: ${({ theme }) => theme.light};
  }
  ul {
    padding-left: 15px;
  }
`;

const PrivacyHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.headingS};
  color: ${({ theme }) => theme.yellow};
  text-align: left;
  margin-bottom: 30px;

  &:not(:first-child) {
    margin-top: 50px;
  }
`;

const PrivacyPolicyContent = () => {
  return (
    <PrivacyContent>
      <PrivacyHeading as="h5">1. Informacje ogólne</PrivacyHeading>
      <p>
        Niniejsza polityka dotyczy Serwisu www,funkcjonującego pod adresem url:
        freelancecon.pl
        <br />
        Operatorem serwisu oraz Administratorem danych osobowych jest:{' '}
        <b>Tutaj wypełnić</b>
        <br />
        Adres kontaktowy poczty elektronicznej operatora: biuro@freelancecon.pl
        <br />
        Operator jest Administratorem Twoich danych osobowych w odniesieniu do
        danych podanych dobrowolnie w Serwisie.
        <br />
        Serwis wykorzystuje dane osobowe w następujących celach:
        <ul>
          <li>- Prowadzenie newslettera </li>
          <li>- Prowadzenie rozmów typu chat online</li>
          <li>- Obsługa zapytań przez formularz </li>
          <li>- Prezentacja oferty lub informacji</li>
        </ul>
        <br />
        Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich
        zachowaniu w następujący sposób:
        <ul>
          <li>
            - Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają
            wprowadzone do systemów Operatora.
          </li>
          <li>
            - Poprzez zapisywanie w urządzeniach końcowych plików cookie
            (tzw.„ciasteczka”).
          </li>
        </ul>
      </p>
      <PrivacyHeading as="h5">
        2. Wybrane metody ochrony danych stosowane przez Operatora
      </PrivacyHeading>
      <p>
        Miejsca logowania i wprowadzania danych osobowych są chronione w
        warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
        logowania,wprowadzone na stronie, zostają zaszyfrowane w komputerze
        użytkownika i mogą być odczytane jedynie na docelowym serwerze. Operator
        okresowo zmienia swoje hasła administracyjne.
      </p>
      <PrivacyHeading as="h5">3. Hosting</PrivacyHeading>
      <p>
        Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora:{' '}
        <b>Tu wypełnić</b>
      </p>
      <PrivacyHeading as="h5">
        4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
      </PrivacyHeading>
      <p>
        W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane
        osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej
        z Tobą umowy lub do zrealizowania obowiązków ciążących na
        Administratorze. Dotyczy to takich grup odbiorców:
        <br />
        <ul>
          <li>
            - upoważnieni pracownicy i współpracownicy, którzy korzystają z
            danych w celu realizacji celu działania strony
          </li>
          <li>- firmy świadczące usługi marketingu na rzecz Administratora</li>
        </ul>
        <br />
        Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż
        jest to konieczne do wykonania związanych z nimi czynności określonych
        osobnymi przepisami (np. o prowadzeniu rachunkowości).
        <br />
        W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej
        niż przez 3 lata.
        <br />
        Przysługuje Ci prawo żądania od Administratora:
        <ul>
          <li>- dostępu do danych osobowych Ciebie dotyczących,</li>
          <li>- ich sprostowania,</li>
          <li>- usunięcia,</li>
          <li>- ograniczenia przetwarzania,</li>
          <li>- oraz przenoszenia danych.</li>
        </ul>
        Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania
        wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu
        wykonania prawnie uzasadnionych interesów realizowanych przez
        Administratora,w tym profilowania, przy czym prawo sprzeciwu nie będzie
        mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych
        podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i
        wolności,w szczególności ustalenia, dochodzenia lub obrony roszczeń. Na
        działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony
        Danych Osobowych, ul. Stawki 2,00-193 Warszawa Podanie danych osobowych
        jest dobrowolne, lecz niezbędne do obsługi Serwisu. W stosunku do Ciebie
        mogą być podejmowane czynności polegające na zautomatyzowanym
        podejmowaniu decyzji,w tym profilowaniu w celu świadczenia usług w
        ramach zawartej umowy oraz w celu prowadzenia przez Administratora
        marketingu bezpośredniego. Dane osobowe nie są przekazywane od krajów
        trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to,
        że nie przesyłamy ich poza teren Unii Europejskiej.
      </p>
      <PrivacyHeading as="h5">5. Informacje w formularzach</PrivacyHeading>
      <p>
        Serwis zbiera informacje podane dobrowolnie przez użytkownika,w tym dane
        osobowe, o ile zostaną one podane. Serwis może zapisać informacje o
        parametrach połączenia (oznaczenie czasu, adres IP). Serwis,w niektórych
        wypadkach,może zapisać informację ułatwiającą powiązanie danych w
        formularzu z adresem e-mail użytkownika wypełniającego formularz.W takim
        wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony
        zawierającej formularz. Dane podane w formularzu są przetwarzane w celu
        wynikającym z funkcji konkretnego formularza, np.w celu dokonania
        procesu obsługi zgłoszenia serwisowego lub kontaktu
        handlowego,rejestracji usług itp. Każdorazowo kontekst i opis formularza
        w czytelny sposób informuje, do czego on służy.
      </p>
      <PrivacyHeading as="h5">6. Logi Administratora</PrivacyHeading>
      <p>
        Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu.
        Dane te są wykorzystywane w celu administrowania serwisem.
      </p>
      <PrivacyHeading as="h5">7. Istotne techniki marketingowe</PrivacyHeading>
      <p>
        Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google
        Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do
        operatora tej usługi danych osobowych, a jedynie zanonimizowane
        informacje.Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu
        końcowym użytkownika.W zakresie informacji o preferencjach użytkownika
        gromadzonych przez sieć reklamową Google użytkownik może przeglądać i
        edytować informacje wynikające z plików cookies przy pomocy narzędzia:
      </p>
      <ul>
        <li>
          <a href="https://www.google.com/ads/preferences/">
            https://www.google.com/ads/preferences/
          </a>
        </li>
      </ul>
      <p>
        Operator stosuje techniki remarketingowe, pozwalające na dopasowanie
        przekazów reklamowych do zachowania użytkownika na stronie, co może
        dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego
        śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych
        osobowych od Operatora do operatorom reklam. Technologicznym warunkiem
        takich działań jest włączona obsługa plików cookie.
        <br />
        Operator korzysta z piksela Facebooka. Ta technologia powoduje, że
        serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w
        nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych,
        wobec których sam jest administratorem. Operator nie przekazuje od
        siebie żadnych dodatkowych danych osobowych serwisowi Facebook.Usługa
        bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
        <br />
        Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez
        tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te
        informacje są anonimizowane zanim zostaną przesłane do operatora usługi
        tak, że nie wie on jakiej osoby fizycznej one dotyczą.W szczególności
        nagrywaniu nie podlegają wpisywane hasła oraz inne dane osobowe.
        Operator stosuje rozwiązanie automatyzujące działanie Serwisu w
        odniesieniu do użytkowników, np.mogące przesłać maila do użytkownika po
        odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie
        korespondencji handlowej od Operatora.
      </p>
      <PrivacyHeading as="h5">8. Informacja o plikach cookies</PrivacyHeading>
      <p>
        Serwis korzysta z plików cookies.
        <br />
        Pliki cookies (tzw.„ciasteczka”) stanowią dane informatyczne,w
        szczególności pliki tekstowe, które przechowywane są w urządzeniu
        końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
        internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
        internetowej, z której pochodzą, czas przechowywania ich na urządzeniu
        końcowym oraz unikalny Podmiotem zamieszczającym na urządzeniu końcowym
        Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
        operator Serwisu.
        <br />
        Pliki cookies wykorzystywane są w następujących celach:
        <ul>
          <li>
            - utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
            której użytkownik nie musi na każdej podstronie Serwisu ponownie
            wpisywać loginu i hasła;
          </li>
          <li>
            realizacji celów określonych powyżej w części „Istotne techniki
            marketingowe”;
          </li>
        </ul>
        W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
        „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies
        „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
        końcowym Użytkownika do czasu wylogowania, opuszczenia strony
        internetowej lub wyłączenia oprogramowania (przeglądarki
        internetowej).„Stałe” pliki cookies przechowywane są w urządzeniu
        końcowym Użytkownika przez czas określony w parametrach plików cookies
        lub do czasu ich usunięcia przez Użytkownika. Oprogramowanie do
        przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj
        domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym
        Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym
        zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies.
        Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe
        informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
        internetowej. Ograniczenia stosowania plików cookies mogą wpłynąć na
        niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
        Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
        wykorzystywane mogą być również przez współpracujące z operatorem
        Serwisu podmioty,w szczególności dotyczy to firm: Google (Google Inc. z
        siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter
        (Twitter Inc. z siedzibą w USA).
      </p>
      <PrivacyHeading as="h5">
        9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
      </PrivacyHeading>
      <p>
        Jeśli użytkownik nie chce otrzymywać plików cookies,może zmienić
        ustawienia przeglądarki.Zastrzegamy, że wyłączenie obsługi plików
        cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
        utrzymania preferencji użytkownika może utrudnić, a w skrajnych
        przypadkach może uniemożliwić korzystanie ze stron www.
        <br />W celu zarządzania ustawieniami cookies wybierz z listy poniżej
        przeglądarkę internetową, której używasz i postępuj zgodnie z
        instrukcjami:
        <ul>
          <li>
            <a href="https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d">
              - Edge
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/pl-pl/topic/jak-usun%C4%85%C4%87-pliki-cookie-w-programie-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">
              - Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pl">
              - Chrome
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/pl-pl/HT201265">- Safari</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/pl/kb/ciasteczka#w_ustawienia-ciasteczek">
              - Firefox
            </a>
          </li>
          <li>
            <a href="https://help.opera.com/pl/latest/web-preferences/">
              - Opera
            </a>
          </li>
        </ul>
        Urządzenia mobilne:
        <ul>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DAndroid&hl=pl&oco=0">
              - Android
            </a>
          </li>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DiOS&hl=pl">
              - Safari (iOS)
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d">
              - Windows Phone
            </a>
          </li>
        </ul>
      </p>
    </PrivacyContent>
  );
};

export default PrivacyPolicyContent;
