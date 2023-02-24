import express, {Express, NextFunction, Request, Response} from 'express';
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import ExerciceRouter from './routes/ExerciceRouter';
import cors from "cors";
import path from 'path';

const app: Express = express();

app.use(express.json());
const corsOptions = {
    origin : "http://localhost:5173",
    credentials : true,
    optionSuccessStatus : 200
  }
  app.use(cors(corsOptions));
  app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

  app.use('/exercices', ExerciceRouter);
    app.get('/', (req: Request, res: Response)=>{
        res.send('Hello  fghere tt, this is Express + TypeScript');
    });



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get("env") === "development" ? err : {};

// render the error page
res.status(err.status || 500);
res.json({ err });
});
export default app;

