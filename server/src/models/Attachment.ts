import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Destiny from './Destiny';

@Entity('attachments')
export default class Attachment {
  @PrimaryGeneratedColumn('increment')
  id_attachment: number;

  @Column()
  attachment: string;

  @ManyToOne(() => Destiny, destiny => destiny.attachments)
  @JoinColumn({ name: 'id_destiny' })
  destiny: Destiny;
}