import basicAuth from 'basic-auth';
import User from '../models/User.js'; 

const authentication =  async (req, res, next) => {
    const user = basicAuth(req);

    if (!user) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Authentication required.');
    }

    try {
        // Busca el usuario en la base de datos
        const authUser = await User.findOne({ where: { username: user.name } });

        if (!authUser || user.pass !== authUser.password) {
            res.set('WWW-Authenticate', 'Basic realm="example"');
            return res.status(401).send('Invalid credentials.');
        }

        // Añade el usuario autenticado al objeto req
        req.authUser = authUser;
        next();
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).send('Internal server error.');
    }
};

export default authentication;
