USE users;

CREATE TABLE IF NOT EXISTS users (
	user_id INT AUTO_INCREMENT,
	display_name VARCHAR (100) NOT NULL,
	category_id VARCHAR (100) NOT NULL,
	logo VARCHAR (200) NOT NULL,
	profile_image_url VARCHAR (200) NOT NULL,
	count_of_followers INT NOT NULL,
	count_of_following INT NOT NULL,
	PRIMARY KEY (user_id)
)

CREATE TABLE IF NOT EXISTS followers (
	followed_at INT AUTO_INCREMENT,  -DATE
	from_id INT NOT NULL,
	from_name INT NOT NULL,
	to_id INT NOT NULL,
	to_name INT NOT NULL,
)


CREATE TABLE IF NOT EXISTS category (
	category_id INT AUTO_INCREMENT,
	display_name VARCHAR (100) NOT NULL,
	category_id VARCHAR (100) NOT NULL,
	PRIMARY KEY (category_id)
)

