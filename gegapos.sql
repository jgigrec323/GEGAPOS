-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/vD8uc1
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE `menu_links` (
    `menu_links_id` int  NOT NULL ,
    `menu_link_text` varchar(25)  NOT NULL ,
    `menu_visibility` TINYINT(1)  NOT NULL ,
    PRIMARY KEY (
        `menu_links_id`
    )
);

CREATE TABLE `foods_menu_categories` (
    `foods_menu_id` int  NOT NULL ,
    `menu_name` varchar(30)  NOT NULL ,
    `menu_icon` text  NOT NULL ,
    `number_items` int  NOT NULL ,
    PRIMARY KEY (
        `foods_menu_id`
    )
);

CREATE TABLE `table` (
    `table_id` int  NOT NULL ,
    `table_section` varchar(10)  NOT NULL ,
    `table_number` varchar(10)  NOT NULL ,
    `is_table_free` TINYINT(1)  NOT NULL ,
    `customer_on_table_id` int  NOT NULL ,
    PRIMARY KEY (
        `table_id`
    )
);

CREATE TABLE `foods_menu_items` (
    `item_id` int  NOT NULL ,
    `item_name` text  NOT NULL ,
    `item_categorie_id` int  NOT NULL ,
    `item_price` int  NOT NULL ,
    PRIMARY KEY (
        `item_id`
    )
);

CREATE TABLE `users` (
    `user_id` int  NOT NULL ,
    `username` varchar(50)  NOT NULL ,
    `user_pin_code` int  NOT NULL ,
    `user_type` varchar(25)  NOT NULL ,
    PRIMARY KEY (
        `user_id`
    )
);

CREATE TABLE `orders` (
    `order_id` int  NOT NULL ,
    `customer_id` int  NOT NULL ,
    `item_bought_id` int  NOT NULL ,
    `created_at` datetime  NOT NULL ,
    `quantity` int  NOT NULL ,
    PRIMARY KEY (
        `order_id`
    )
);

CREATE TABLE `customers` (
    `cus_id` int  NOT NULL ,
    `cus_firstname` varchar(75)  NOT NULL ,
    `cus_lastname` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `cus_id`
    )
);

CREATE TABLE `sales_summary` (
    `sales_id` int  NOT NULL ,
    `date` datetime  NOT NULL ,
    `user_id` int  NOT NULL ,
    `order_id` int  NOT NULL ,
    `total_amount` decimal(10,2)  NOT NULL ,
    `payment_method` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `sales_id`
    )
);

CREATE TABLE `item_sales` (
    `item_sales_id` int  NOT NULL ,
    `sales_id` int  NOT NULL ,
    `item_id` int  NOT NULL ,
    `quantity` int  NOT NULL ,
    `subtotal` decimal(10,2)  NOT NULL ,
    PRIMARY KEY (
        `item_sales_id`
    )
);

ALTER TABLE `table` ADD CONSTRAINT `fk_table_customer_on_table_id` FOREIGN KEY(`customer_on_table_id`)
REFERENCES `customers` (`cus_id`);

ALTER TABLE `foods_menu_items` ADD CONSTRAINT `fk_foods_menu_items_item_categorie_id` FOREIGN KEY(`item_categorie_id`)
REFERENCES `foods_menu_categories` (`foods_menu_id`);

ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_customer_id` FOREIGN KEY(`customer_id`)
REFERENCES `customers` (`cus_id`);

ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_item_bought_id` FOREIGN KEY(`item_bought_id`)
REFERENCES `foods_menu_items` (`item_id`);

ALTER TABLE `sales_summary` ADD CONSTRAINT `fk_sales_summary_user_id` FOREIGN KEY(`user_id`)
REFERENCES `users` (`user_id`);

ALTER TABLE `sales_summary` ADD CONSTRAINT `fk_sales_summary_order_id` FOREIGN KEY(`order_id`)
REFERENCES `orders` (`order_id`);

ALTER TABLE `item_sales` ADD CONSTRAINT `fk_item_sales_sales_id` FOREIGN KEY(`sales_id`)
REFERENCES `sales_summary` (`sales_id`);

ALTER TABLE `item_sales` ADD CONSTRAINT `fk_item_sales_item_id` FOREIGN KEY(`item_id`)
REFERENCES `foods_menu_items` (`item_id`);

