const MenuLink = require("../models/MenuLink")

const createMenuLink = async(req, res) => {
    const { menu_link_text, menu_visibility, url } = req.body;
    try {
        const menuLink = await MenuLink.create({ menu_link_text, menu_visibility, url })
        res.status(200).json({ message: "Menu created with success", menuLink });
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllMenuLink = async(req, res) => {
    try {
        const menuLinks = await MenuLink.findAll()
        res.status(200).json({ message: "Fetched succesfully", menuLinks });
    } catch (error) {
        res.status(500).json(error)
    }

}
const getMenuLinkById = async(req, res) => {
    const { id } = req.params;
    try {
        const menuLink = await MenuLink.findOne({ where: { menu_links_id: id } });
        if (menuLink) {
            res.status(200).json({ menuLink });
        } else {
            res.status(404).json({ message: 'Menu Link not found' });
        }
    } catch (error) {
        res.status(500).json(error)

    }
}
const updateMenuLink = async(req, res) => {
    const { id } = req.params;
    const { menu_link_text, menu_visibility, url } = req.body;

    try {
        const menuLink = await MenuLink.findOne({ where: { menu_links_id: id } });

        if (!menuLink) {
            return res.status(404).json({ message: 'Menu Link not found' });
        }

        menuLink.menu_link_text = menu_link_text;
        menuLink.menu_visibility = menu_visibility;
        menuLink.url = url;

        await menuLink.save();

        res.status(200).json({ message: "Menu Link updated successfully", menuLink });

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteMenuLink = async(req, res) => {
    const { id } = req.params;

    try {
        const menuLink = await MenuLink.findOne({ where: { menu_links_id: id } });

        if (!menuLink) {
            return res.status(404).json({ message: 'Menu Link not found' });
        }

        await menuLink.destroy();

        res.status(200).json({ message: "Menu Link deleted successfully" });

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createMenuLink, getAllMenuLink, getMenuLinkById, updateMenuLink, deleteMenuLink }