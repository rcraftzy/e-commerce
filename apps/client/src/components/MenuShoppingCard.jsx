import { useState } from 'react';
import { AdditionIcon, DropItemIcon, ShoppingBag, SubstractIcon } from './Icons';
import { Modal } from '@mui/material';

export const MenuShoppingCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <button onClick={handleOpen} className="flex flex-col justify-center px-9 gap-0">
        <div className="w-20 h-auto fill-white">
          <ShoppingBag />
        </div>
        <span className="text-center font-bold text-white leading-[16px]">Tu carrito<br /> de compra</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='relative mx-auto max-w-5xl'>
          <div className="bg-light-ivory px-10 pt-10 w-[340px] mx-auto absolute top-32 border-2 border-fire-red right-0">

            <div className='relative flex gap-4'>
              <div className="absolute right-0">
                <div className='w-4'>
                  <DropItemIcon />
                </div>
              </div>
              <div className='w-1/3'>
                <img src="/assets/pictures/Foto-2.png" alt="foto" />
              </div>
              <div className='w-2/3 flex flex-col gap-2  mr-[3px]'>
                <h3 className='text-lg font-bold text-chocolate-brown leading-[15px] mt-[0.5px]'>Hamburguesa Western</h3>
                <span className='uppercase text-xs text-intense-orange font-bold'>SIN COMBO</span>
                <div>
                  <h4 className='font-bold text-chocolate-brown text-sm leading-[5px]'>Adiciones:</h4>
                  <span className='text-sm text-chocolate-brown'>Tocineta</span>
                </div>
                <div>
                  <h4 className='font-bold text-chocolate-brown text-sm leading-[5px]'>Acompañamiento:</h4>
                  <span className='text-sm text-chocolate-brown'>Papa casquillo</span>
                </div>
                <div className='leading-[15px]'>
                  <h4 className='font-bold text-chocolate-brown text-sm leading-[5px]'>Bebida:</h4>
                  <span className='text-sm text-chocolate-brown'>Hit de lulo</span>
                </div>
                <div className='flex items-center gap-6'>
                  <div className='w-4'>
                    <AdditionIcon />
                  </div>
                  <span className='text-chocolate-brown font-bold '>2</span>
                  <div className='w-4'>
                    <SubstractIcon />
                  </div>
                </div>
                <span className="text-moss-green font-bold">$ 72.800</span>
              </div>
            </div>
            <footer className='flex gap-4 flex-col justify-center mb-3'>
              <div className='flex justify-between mx-5 mt-5'>
                <h4 className='text-chocolate-brown font-bold'>
                  Subtotal
                </h4>
                <span className='font-bold text-moss-green'>$ 97.100</span>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-lg font-bold"
                  type="submit">
                  Paga aquí
                </button>
              </div>
              <div className='text-chocolate-brown text-xs'>
                <p className='text-center mx-4'>
                  *El envío y los impuestos se
                  calcularán al finalizar la compra.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </Modal>
    </div>
  );
}
