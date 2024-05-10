import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSetting {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
