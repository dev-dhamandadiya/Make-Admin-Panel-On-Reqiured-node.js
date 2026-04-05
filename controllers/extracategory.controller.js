import fs from "fs";

const extracategorycontroller = {

    addextracategoryPage(req, res) {
        return res.render('pages/extracategory');
    },

    async extraaddcategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/extracategory/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            });

            const data = await response.json();
            console.log("ADD RESPONSE:", data);

            return res.redirect('/extracategory/view');

        } catch (error) {
            console.log("ADD ERROR:", error.message);
            return res.redirect('/extracategory/view');
        }
    },

    async extraviewcategory(req, res) {
        try {
            const response = await fetch('http://localhost:8081/api/extracategory/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            return res.render('pages/viewextracategory', {
                extracategories: data || []
            });

        } catch (error) {
            console.log("VIEW ERROR:", error.message);
            return res.send("Error loading extracategories");
        }
    },

    async extraeditcategoryPage(req, res) {
        try {
            const id = req.params.id;
            const response = await fetch(
                `http://localhost:8081/api/extracategory/${req.params.id}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            const data = await response.json();

            return res.render('pages/editextracategory', {
                extracategory: data
            });

        } catch (error) {
            console.log("EDIT PAGE ERROR:", error.message);
            return res.send("Error loading edit page");
        }
    },

    async extraupdatecategory(req, res) {
        try {
            let oldImage = req.body.image;

            if (req.file) {
                req.body.image = req.file.path;
            }

            await fetch(
                `http://localhost:8081/api/extracategory/${req.params.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req.body)
                }
            );

            // 👉 delete old image if new uploaded
            if (req.file && oldImage) {
                fs.unlinkSync(oldImage);
            }

            return res.redirect('/extracategory/view');

        } catch (error) {
            console.log("UPDATE ERROR:", error.message);
            return res.send("Error updating extracategory");
        }
    },

};

export default extracategorycontroller;