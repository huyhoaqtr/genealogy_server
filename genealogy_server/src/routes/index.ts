/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Router } from 'express';
import authRoutes from './auth.routes';
import tribeRoutes from './tribe.routes';
import messageRoutes from './message.routes';
import eventRoutes from './event.routes';
import fundRoutes from './fund.routes';
import voteRoutes from './vote.routes';
import feedRoutes from './feed.routes';
import web3Routes from './web3.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tribe', tribeRoutes);
router.use('/message', messageRoutes);
router.use('/event', eventRoutes);
router.use('/fund', fundRoutes);
router.use('/vote', voteRoutes);
router.use('/feed', feedRoutes);
router.use('/web3', web3Routes);

export default router;
