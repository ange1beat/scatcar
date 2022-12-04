import logo from '../images/skatlogowhite.png'
import car from '../images/car.png'
import carvid from '../images/carvid.mp4'
import carvid2 from '../images/carvid2.mp4'
import skatwork from '../images/skatwork.jpg'
import skatwork2 from '../images/skatwork2.jpg'
import skatwork3 from '../images/skatwork3.jpg'
import anton from '../images/anton.jpg'
import artem from '../images/artem.jpg'
import kulikov from '../images/kulikov.jpg'
import viktor from '../images/viktor.jpg'
import telegram from '../images/telegram.png'
import phone from '../images/phone.png'

function Main() {

    const callback = function (entries) {
        entries.forEach((entry) => {
          console.log(entry);
      
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      };
      
      const observer = new IntersectionObserver(callback);
      
      const targets = document.querySelectorAll(".js-show-on-scroll");
      targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
      });

    return (
        <div className='flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-bg items-center w-[100%] h-[100%] overflow-hidden'>
            <div className='flex w-auto items-center justify-center'>
                <img src={logo} alt='logo' className='w-32 h-32 animate-text'/>
                <div className='text-white font-bold text-5xl animate-text'>С К А Т</div>
            </div>
            <div className='flex flex-col'>
                <div className='justify-center text-white font-bold text-[200%] mt-10 animate-text'>Инновационная электротехника нового поколения</div>
            </div>
            <div className='hidden sm:flex items-center animate-text'>
                <div className='order-1 flex flex-col'>
                    <div className='w-[240px] text-white p-5'>Дешевле за счет модульной унифицированной конструкции и отсутствия сложных для производства деталей, требующих дорогостоящего оборудования (узкопрофильных станков)</div>
                    <div className='w-[240px] text-white p-5 '>В случае отказа тормозов может остановиться за счет изменения схождения колес.</div>
                </div>
                <div className='order-2 justify-center'><img src={car} alt='car' className='w-[1000px]'/></div>
                <div className='order-3 flex flex-col'>
                    <div className='w-[240px] text-white p-5'>Машина обладает более высокой маневренностью среди конкурентов, упрощает парковку (имеется боковой ход) может делать разворот на месте.</div>
                    <div className='w-[240px] text-white p-5'>Имеет возможность преодолевать водные преграды за счет возможности использования герметичного корпуса тк нету рулевых тяг и проводов на колеса.</div>
                </div>
            </div>
            <div className='flex flex-col sm:hidden items-center'>
                <div className='justify-center mt-[50px]'><img src={car} alt='car' className='w-[1000px] animate-text'/></div>
                <div className='w-[300px] p-5 text-white js-show-on-scroll'>Дешевле за счет модульной унифицированной конструкции и отсутствия сложных для производства деталей, требующих дорогостоящего оборудования (узкопрофильных станков)</div>
                <div className='w-[300px] p-5 text-white js-show-on-scroll'>Машина обладает более высокой маневренностью среди конкурентов, упрощает парковку (имеется боковой ход) может делать разворот на месте.</div>
                <div className='w-[300px] p-5 text-white js-show-on-scroll '>В случае отказа тормозов может остановиться за счет изменения схождения колес.</div>
                <div className='w-[300px] p-5 text-white js-show-on-scroll'>Имеет возможность преодолевать водные преграды за счет возможности использования герметичного корпуса тк нету рулевых тяг и проводов на колеса.</div>
                <div className='w-[300px] p-5 text-white js-show-on-scroll'>Обладает инновационной системой курсовой устойчивости за счет управления каждым мотором на каждое колесо в зависимости от угла поворота руля.</div>
            </div>
            <div className='flex flex-col bg-gray-900 w-[100%] justify-center items-center'>
                <video className='pt-5 pl-5 pr-5 sm:w-[500px] ' src={carvid} controls/>
                <video className='pt-5 pl-5 pr-5 sm:w-[500px] ' src={carvid2} controls/>

                <div className='text-[500%] font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-textGr'>МЫ МЕНЯЕМ МИР</div>

                <img src={skatwork} alt='skatwork' className='pb-5'/>
                <img src={skatwork2} alt='skatwork' className='pb-5'/>
                <img src={skatwork3} alt='skatwork' className='pb-5'/>
            </div>
        <div className='flex flex-col bg-gray-800 w-[100%] justify-center items-center'>
            <div className='text-[70px] font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-purple-500 to-green-500
            animate-textGr'>СОЗДАЕМ</div>
            <div className='text-[100px] font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-purple-500 to-green-500
            animate-textGr'>НОВЫЕ</div>
            <div className='text-[50px] font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-purple-500 to-green-500
            animate-textGr'>ТЕХНОЛОГИИ</div>
        </div>

        <div className='bg-black flex flex-col w-[100%] justify-center align-middle sm:flex-col items-center text-white p-5'>
            <div className='flex flex-col justify-center align-middle sm:w-[30%]'>
                <div className='justify-center align-middle'><img src={kulikov} alt='kulikov' className='rounded-full flex-auto justify-center w-[40%] m-auto mt-5'/></div>
                <div className='font-bold pt-2'>Вадим Геннадьевич Куликов</div>
                <div className='pt-5'>Окончил Энергетический факультет МГТУ им. Баумана, является Заслуженным изобретателем России.</div>
            </div>
            <div className='flex flex-col justify-center align-middle sm:w-[30%] p-5'>
                <div className='justify-center align-middle'><img src={anton} alt='kulikov' className='rounded-full flex-auto justify-center w-[40%] m-auto mt-5'/></div>
                <div className='font-bold pt-2'>Троицкий Антон Александрович</div>
                <div className='pt-5'>Окончил Специальный машиностроительный факультет МГТУ им. Баумана, экономический университет им. Г.В Плеханова, является квалифицированным инженером</div>
            </div>
            <div className='flex flex-col justify-center align-middle sm:w-[30%] p-5'>
                <div className='justify-center align-middle'><img src={artem} alt='kulikov' className='rounded-full flex-auto justify-center w-[40%] m-auto mt-5'/></div>
                <div className='font-bold pt-2'>Троицкий Артем Александрович</div>
                <div className='pt-5'>Окончил аспирантуру МИРЭА, написал диссератцию на тему «Распознавание изображений в сверхширокополосном радиовидении при обнаружении беспилотных летательных аппаратов», присвоена квалификация «Исследователь. Преподаватель-исследователь»</div>
            </div>
            <div className='flex flex-col justify-center align-middle sm:w-[30%] p-5'>
                <div className='justify-center align-middle'><img src={viktor} alt='kulikov' className='rounded-full flex-auto justify-center w-[40%] m-auto mt-5'/></div>
                <div className='font-bold pt-2'>Колесников Виктор Андреевич</div>
                <div className='pt-5'>Студент 4го курса Финансового университета при Правительстве РФ, специализируется на веб-разработке, макроэкономике, цифровых финансах.</div>
            </div>
        </div>

        <div className='justify-center align-middle justify-center items-center'>
        <div className='text-white flex w-[100%] justify-center items-center'>
          <div className='font-bold text-[10vw] sm:text-[5vw]'>ПЕРСПЕКТИВЫ РАЗВИТИЯ</div>  
        </div>
        <div className='bg-gray-800 w-screen justify-center items-center'>
          <div className='font-bold text-[10vw] sm:text-[5vw] js-show-on-scroll bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-blue-300 to-green-500
            animate-textGr'>ЖКХ ЭЛЕКТРОМАШИНЫ</div>  
        </div>
        <div className='bg-gray-700 flex w-[100%] justify-center items-center'>
          <div className='font-bold text-[10vw] sm:text-[5vw] js-show-on-scroll bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-blue-300 to-green-500
            animate-textGr'>ПОВСЕДНЕВНЫЕ АВТОМОБИЛИ</div>  
        </div>
        <div className='bg-gray-600 flex w-[100%] justify-center items-center'>
          <div className='font-bold text-[10vw] sm:text-[5vw] js-show-on-scroll bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-blue-300 to-green-500
            animate-textGr'>ЭЛЕКТРО СУВЕРЕНИТЕТ ГОСУДАРСТВА</div>  
        </div>
        </div>
        
        <div className='flex flex-col items-center justify-center text-white mt-[30px]'>
            <div className='flex flex-row pt-[10px]'>
                <div className=''><img src={phone} alt='phoneicon' className='w-[50px]'/></div>
                <div className='align-middle flex items-center pl-[10px]'>+79169715291</div>
            </div>
            <div className='flex flex-row pt-[10px]'>
                <div><img src={telegram} alt='tgicon' className='w-[50px]'/></div>
                <a href='https://t.me/fakelEl' className='align-middle flex items-center pl-[10px]'>Telegram</a>
            </div>
        </div>

        <div className='bg-black w-[100%] text-gray-900 h-[150px] mt-[30px] flex items-center align-middle'>
            <img src={logo} alt='logo' className='w-32 h-32 js-show-on-scroll align-middle items-center m-auto'/>
        </div>

        </div>
    )
}

export default Main;