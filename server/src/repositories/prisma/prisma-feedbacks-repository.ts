import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

  async index() {
    const bugs = await prisma.feedback.findMany({
      where: {
        type: "BUG",
      },
    });
    const ideas = await prisma.feedback.findMany({
      where: {
        type: "IDEA",
      },
    });
    const others = await prisma.feedback.findMany({
      where: {
        type: "OTHER",
      },
    });

    const result = {
      BUG: bugs.length ?? 0,
      IDEA: ideas.length ?? 0,
      OTHER: others.length ?? 0,
    };
    return result;
  }
}
