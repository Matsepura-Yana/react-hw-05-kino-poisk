import React from 'react'
const AboutUs = () => {
    const style = {
        maxWidth: '560px',
        fontSize: '20px',
        marginTop: '110px',
        marginLeft: '500px',
        marginBottom: '104px',
        textAlign: 'center',
    }

    return (
        <div>
            <div className="about-us" style={style}>
                Рады приветствовать всех любителей интересного и качественного
                кино на нашем сайте. У нас более 30.000 бесплатных фильмов и
                сериалов онлайн - официальный сайт foxmovies.com! Вы любите
                кинематограф также как мы? Постоянно следите за выходом новинок?
                Не проходит ни одного вечера, чтобы вы не посмотрели пару-тройку
                фильмов? Тогда вы пришли точно по адресу! В нашем кинотеатре
                можно смотреть фильмы онлайн бесплатно и без каких-либо
                ограничений!
                <br />
                Специально для наших уважаемых пользователей мы постарались
                собрать лучшую коллекцию фильмов различных жанров, времен и
                народов! Команда проекта постоянно следит за выходом фильмов в
                прокат и регулярно добавляет картины, чтобы вы могли одними из
                первых наслаждаться, как лучшими мировыми шедеврами, так и
                новинками кино совершенно бесплатно!
            </div>
            <div style={{ marginLeft: '13px' }}>
                <h2>Наши контакты</h2>
                <h3 style={{ fontWeight: 'normal', marginTop: '-10px' }}>
                    E-mail: emailexample@gmail.com
                </h3>
            </div>
        </div>
    )
}

export default AboutUs
