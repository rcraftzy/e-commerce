import { Fragment, useEffect, useState } from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons";
import { ProductItem } from "./ProductoItem";
import { Checkbox, Modal } from "@mui/material";
import { ModalDelete } from "../ModalDelete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const Productos = () => {
  const [hideSection, setHideSection] = useState(true);
  const [open, setOpen] = useState({
    option: "",
    state: false,
  });
  const [itemsList, setItemsList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    nombre: "",
    precio: "",
    precioCombo: "",
    categoria: "",
    entrega: "",
    imagen: "",
    adicionales: "",
    acompanamento: "",
    bebidad: "",
  });
  const [openDelete, setOpenDelete] = useState(false);
  useEffect(() => {
    setItemsList(pList);
  }, []);

  const handleClose = () => {
    setOpen({
      option: "",
      state: false,
    });
  };

  const handleCreate = () => {
    setOpen({
      option: "create",
      state: true,
    });
    setCurrentItem({
      ...currentItem,
      nombre: "",
      precio: "",
      precioCombo: "",
      categoria: "",
      entrega: "",
      imagen: "",
      adicionales: "",
      acompanamento: "",
      bebidad: "",
    });
  };

  const changeItem = (e) => {
    const { name, value } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (open.option === "create") {
      setItemsList((itemsList) => [...itemsList, currentItem]);
      setOpen({
        ...open,
        option: "",
        state: false,
      });
    } else {
      setItemsList((itemsList) =>
        itemsList?.map((item) =>
          item?.id === currentItem?.id ? currentItem : item
        )
      );
      setOpen({
        ...open,
        option: "",
        state: false,
      });
    }
  };

  const handleDelete = () => {
    setItemsList((itemsList) =>
      itemsList?.filter((item) => item?.id !== currentItem?.id)
    );
    setOpenDelete(false);
  };

  // ejemplo
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (event, values) => {
    const filteredValues = values.filter((value) =>
      top100Films.some((option) => option.name == value)
    );
    console.log(filteredValues);
    setSelectedItems(values);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const top100Films = [
    { name: "name1", year: 1994 },
    { name: "name2", year: 1972 },
    { name: "name3", year: 1972 },
  ];

  return (
    <section id="productos">
      <Header
        title={"Productos"}
        setHideSection={setHideSection}
        hideSection={hideSection}
      >
        <ButtonBorderGreen onClick={handleCreate}>Crear</ButtonBorderGreen>
        <ButtonSearch />
        {/* eliminar */}
        <ModalDelete
          openDelete={openDelete}
          handleDelete={handleDelete}
          setOpenDelete={setOpenDelete}
        />
        {/* crear y actualizar */}
        <Modal
          open={open?.state}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
            <div className=" py-10 px-20">
              <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">
                {open.option === "create"
                  ? "CREAR NUEVO PRODUCTO"
                  : "EDITAR PRODUCTO"}
              </h2>
              <form onSubmit={handleSave}>
                <section className="flex gap-8">
                  <div className="flex">
                    <label className="text-chocolate-brown text-xl font-bold">
                      Nombre producto*
                    </label>
                  </div>
                  <div className="flex-1">
                    <input
                      onChange={(e) => changeItem(e)}
                      name="nombre"
                      value={currentItem?.nombre}
                      type="text"
                      className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                  </div>
                </section>
                <section className="grid grid-cols-4 gap-4 py-4">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Precio unidad*
                  </label>
                  <input
                    type="text"
                    onChange={(e) => changeItem(e)}
                    value={currentItem?.precio}
                    name="precio"
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    placeholder="Click aquí*"
                    required
                  />
                  <label className="text-chocolate-brown text-xl font-bold">
                    Entrega*
                  </label>
                  <input
                    onChange={(e) => changeItem(e)}
                    value={currentItem?.entrega}
                    name="entrega"
                    type="text"
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    placeholder="Click aquí*"
                    required
                  />
                  <label className="text-chocolate-brown text-xl font-bold">
                    Precio combo*
                  </label>
                  <input
                    type="text"
                    onChange={(e) => changeItem(e)}
                    value={currentItem?.precioCombo}
                    name="precioCombo"
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    placeholder="Click aquí*"
                    required
                  />
                  <label className="text-chocolate-brown text-xl font-bold">
                    Categoria*
                  </label>
                  <input
                    onChange={(e) => changeItem(e)}
                    value={currentItem?.categoria}
                    name="categoria"
                    type="text"
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                    placeholder="Click aquí*"
                    required
                  />
                </section>
                <section className="flex gap-8">
                  <div className="flex">
                    <label className="text-chocolate-brown text-xl font-bold">
                      Ingredientes
                    </label>
                  </div>
                  <div className="flex-1">
                    <textarea
                      rows="3"
                      cols=""
                      className="w-full text-chocolate-brown text-xl bg-white pl-6 rounded-3xl"
                    ></textarea>
                  </div>
                </section>
                <div className="mb-4 flex flex-col gap-4">
                  <label className="text-chocolate-brown text-xl font-bold">
                    Elige la imagen del banner que deseas subir*
                  </label>
                  <section className="flex gap-4">
                    <div className="flex-1">
                      <input
                        onChange={(e) => changeItem(e)}
                        value={currentItem?.imagen}
                        name="imagen"
                        type="text"
                        className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                        placeholder="Click aquí*"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <ButtonBorderGreen>Subir foto</ButtonBorderGreen>
                    </div>
                  </section>
                </div>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">
                      Adicionales*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Acompañamiento*
                    </label>
                    <label className="text-chocolate-brown text-xl font-bold">
                      Bebidas*
                    </label>
                  </section>
                  <section className="w-2/3 flex flex-col gap-4">
                    <Autocomplete
                      multiple
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.name}
                      onChange={handleChange}
                      onOpen={handleMenuOpen}
                      onClose={handleMenuClose}
                      open={isMenuOpen}
                      value={selectedItems}
                      sx={{
                        width: 300,
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            outline: "none",
                          },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #ccc",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#000",
                        },
                      }}
                      ListboxProps={{
                        style: {
                          maxHeight: "200px",
                          overflow: "auto",
                          autoHeight: true,
                        },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Selecciona los elementos"
                          placeholder="Selecciona los elementos"
                        />
                      )}
                      renderOption={(props, option, state) => (
                        <div
                          key={option?.name}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center ">
                            <Checkbox
                              checked={selectedItems.some(
                                (item) => item?.name == option?.name
                              )}
                              {...props}
                            />
                            <span>{option?.name}</span>
                          </div>
                          <button>12</button>
                        </div>
                      )}
                    />
                    {/* <input
                      onChange={(e) => changeItem(e)}
                      value={currentItem?.adicionales}
                      name="adicionales"
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    /> */}
                    <input
                      onChange={(e) => changeItem(e)}
                      value={currentItem?.acompanamento}
                      name="acompanamento"
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                    <input
                      onChange={(e) => changeItem(e)}
                      value={currentItem?.bebidad}
                      name="bebidad"
                      type="text"
                      className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`}
                      placeholder="Click aquí*"
                      required
                    />
                  </section>
                </div>
                <footer className="flex justify-center gap-4 mt-5">
                  <Button
                    className={
                      "border-moss-green bg-moss-green px-9 text-white"
                    }
                  >
                    {open.option === "create" ? "Crear" : "Editar"}
                  </Button>
                  <Button
                    onClick={handleClose}
                    className={"border-fire-red bg-fire-red text-white px-9"}
                  >
                    Cancelar
                  </Button>
                </footer>
              </form>
            </div>
          </div>
        </Modal>
      </Header>
      {hideSection && (
        <Content>
          {itemsList?.map((producto) => (
            <ProductItem
              key={`${producto?.id}_${producto?.nombre}`}
              producto={producto}
              setOpen={setOpen}
              setCurrentItem={setCurrentItem}
              setOpenDelete={setOpenDelete}
            />
          ))}
        </Content>
      )}
    </section>
  );
};

const pList = [
  {
    id: 1,
    nombre: "Hamburguesa Patagonia",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 1",
    imagen: "imagen1",
    adicionales: "adicionales",
    acompanamento: "acompanamiento",
    bebidad: "bebidas",
  },
  {
    id: 2,
    nombre: "Hamburguesa Western",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 2",
    imagen: "imagen2",
    adicionales: "adicionales 1",
    acompanamento: "acompanamiento 1",
    bebidad: "bebidas 1",
  },
  {
    id: 3,
    nombre: "Hamburguesa Rodeo",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 4",
    imagen: "imagen3",
  },
  {
    id: 4,
    nombre: "Hamburguesa",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 5",
    imagen: "imagen4",
  },
  {
    id: 5,
    nombre: "Hamburguesa grande",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
    entrega: "entrega 11",
  },
];
