import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Attachment from './Attachment';

@Entity('destinies')
export default class Destiny {
  @PrimaryGeneratedColumn('increment')
  id_destiny: number;
  @Column()
  destiny: string;

  @OneToMany(() => Attachment, attachment => attachment.destiny, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'id_destiny' })
  attachments: Attachment[];
}