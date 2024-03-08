import knexBase from 'knex';
import knexConfig from '../../../knexfile.js';

export const knex = knexBase(knexConfig.development);