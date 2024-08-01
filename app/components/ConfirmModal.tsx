import FillButton from '@/components/FillButton';
import { Button, Modal } from 'antd';

export default function ConfirmModal({ isModalOpen = false, onOk = () => { }, onCancel = () => { } }: { isModalOpen?: boolean, onOk?: () => void, onCancel?: () => void }) {

    return (
        <Modal title={<h1 className='text-p1'>подтверждать</h1>} open={isModalOpen} centered footer={null}>
            <div className='text-center py-[10px]'>
                <p className='text-p1 mb-[16px]'>Вы уже зарегистрировали свою гостиничную недвижимость!</p>
                <p className='text-p2 mb-[16px]'>
                    Если вы хотите удалить текущую зарегистрированную гостиничную собственность и зарегистрировать новую гостиничную собственность, нажмите «Да».
                </p>
                <div className='flex justify-center'>
                    <FillButton caption='Да, Удалить' size='sm' className='mr-[8px]' type='danger' onBtnClick={onOk} />
                    <FillButton caption='Нет, проверь мой отель' size='sm' onBtnClick={onCancel} />
                </div>
            </div>
        </Modal>
    )
}