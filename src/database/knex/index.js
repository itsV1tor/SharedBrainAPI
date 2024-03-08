import { knex as knexBase } from 'knex';
import knexConfig from '../../../knexfile';

export const knex = knexBase(knexConfig.development);