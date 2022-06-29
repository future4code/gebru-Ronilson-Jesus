import { Request, Response } from 'express';
import selectUsersByType from '../data/selectUsersByType';

export const getUsersFilterByType = async (req: Request, res: Response): Promise<void> => {
   try {
      const type: string = req.params.type;

      if (type.toUpperCase() !== "OPERATIONS" &&
         type.toUpperCase() !== "TEACHER" &&
         type.toUpperCase() !== "CX"
      ) {
         res.statusCode = 422;
         throw new Error(`O valor "tipo" não é válido! O valor deve ser "operations", "teacher"
         ou "cx" para ser um válido!`)
      }

      const users = await selectUsersByType(type);

      res.status(200).send(users);

   } catch (error: any) {
      res.send(error.message || error.sqlMessage);
   };
};