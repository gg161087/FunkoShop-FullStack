-- Crear la tabla "funkoshop"

CREATE TABLE
    funkoshop (
        id INT AUTO_INCREMENT PRIMARY KEY,
        serie VARCHAR(100) NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        imagen VARCHAR(255) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        cuotas TINYINT(255) NOT NULL,
        stock INT NOT NULL
    );

INSERT INTO
    funkoshop (
        serie,
        nombre,
        imagen,
        precio,
        cuotas,
        stock,
    )
VALUES (
        'STAR WARS',
        'STORMTROOPER LIGHTSABER',
        './assets/images/svg/troper-11.svg',
        1799.99,
        3,
        999
    ), (
        'POKEMON',
        'PIDGEOTTO',
        './assets/images/svg/pidgeotto-11.svg',
        1799.99,
        3,
        999
    ), (
        'HARRY POTTER',
        'LUNA LOVEGOOD LION MASK',
        './assets/images/svg/luna-11.svg',
        1799.99,
        3,
        999
    );