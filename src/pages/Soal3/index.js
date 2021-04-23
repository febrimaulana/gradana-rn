import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Heading, Input, ModalSelect} from '../../components';
import {colors, hp} from '../../constants';
import {
  getProvinsi,
  getKabupaten,
  getKecamatan,
  getKelurahan,
} from '../../redux';
import {showInfo, showSuccess} from '../../utils';

const Soal3 = () => {
  const dispatch = useDispatch();
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);

  const [button, setButton] = useState(false);

  const [modalProvinsi, setModalProvinsi] = useState(false);
  const [modalKabupaten, setModalKabupaten] = useState(false);
  const [modalKecamatan, setModalKecamatan] = useState(false);
  const [modalKelurahan, setModalKelurahan] = useState(false);

  const [input, setInput] = useState({
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    kelurahan: '',
  });

  const onProvinsi = value => {
    setInput({
      ...input,
      provinsi: value.nama,
      kabupaten: '',
      kecamatan: '',
      kelurahan: '',
    });

    dispatch(getKabupaten(value.id)).then(result => {
      setButton(false);
      setKabupaten(result.kota_kabupaten);
    });

    setModalProvinsi(false);
  };

  const onKabupaten = value => {
    setInput({
      ...input,
      kabupaten: value.nama,
      kecamatan: '',
      kelurahan: '',
    });

    dispatch(getKecamatan(value.id)).then(result => {
      setButton(false);
      setKecamatan(result.kecamatan);
    });

    setModalKabupaten(false);
  };

  const onKecamatan = value => {
    setInput({
      ...input,
      kecamatan: value.nama,
      kelurahan: '',
    });

    dispatch(getKelurahan(value.id)).then(result => {
      setButton(false);
      setKelurahan(result.kelurahan);
    });

    setModalKecamatan(false);
  };

  const onKelurahan = value => {
    setInput({
      ...input,
      kelurahan: value.nama,
    });
    setButton(true);
    setModalKelurahan(false);
  };

  useEffect(() => {
    dispatch(getProvinsi()).then(result => {
      setProvinsi(result.provinsi);
    });
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <Heading title="Daerah Indonesia" bold fontSize={hp(3)} />
      <ScrollView showsVerticalScrollIndicator>
        <Gap height={hp(2)} />
        <Input
          title="Pilih Provinsi"
          placeholder={input.provinsi}
          onPress={() => setModalProvinsi(true)}
        />
        <Gap height={hp(2)} />
        <Input
          title="Pilih Kabupaten"
          placeholder={input.kabupaten}
          onPress={() => {
            if (kabupaten.length === 0) {
              return showInfo('Silahkan pilih provinsi terlebih dahulu');
            }
            setModalKabupaten(true);
          }}
        />
        <Gap height={hp(2)} />
        <Input
          title="Pilih Kecamatan"
          placeholder={input.kecamatan}
          onPress={() => {
            if (kabupaten.length === 0) {
              return showInfo('Silahkan pilih Kabupaten terlebih dahulu');
            }
            setModalKecamatan(true);
          }}
        />
        <Gap height={hp(2)} />
        <Input
          title="Pilih Kelurahan"
          placeholder={input.kelurahan}
          onPress={() => {
            if (kabupaten.length === 0) {
              return showInfo('Silahkan pilih Kecamatan terlebih dahulu');
            }
            setModalKelurahan(true);
          }}
        />
        <Gap height={hp(2)} />
        <View style={styles.card}>
          <Heading title="Detail Alamat" bold fontSize={hp(2)} />
          <Gap height={hp(0.5)} />
          <Heading title={input.provinsi} fontSize={hp(1.5)} />
          <Gap height={hp(0.5)} />
          <Heading title={input.kabupaten} fontSize={hp(1.5)} />
          <Gap height={hp(0.5)} />
          <Heading title={input.kecamatan} fontSize={hp(1.5)} />
          <Gap height={hp(0.5)} />
          <Heading title={input.kelurahan} fontSize={hp(1.5)} />
        </View>
        <Gap height={hp(2)} />
        {button && (
          <Button
            title="Simpan"
            onPress={() => {
              showSuccess('Mantap, anda berhasil simpan alamat');
            }}
          />
        )}
      </ScrollView>
      <ModalSelect
        isVisible={modalProvinsi}
        modalTitle="Provinsi"
        list={provinsi}
        onPressClose={() => setModalProvinsi(false)}
        onPress={onProvinsi}
      />
      <ModalSelect
        isVisible={modalKabupaten}
        modalTitle="Kabupaten / Kota"
        list={kabupaten}
        onPressClose={() => setModalKabupaten(false)}
        onPress={onKabupaten}
      />
      <ModalSelect
        isVisible={modalKecamatan}
        modalTitle="Kecamatan"
        list={kecamatan}
        onPressClose={() => setModalKelurahan(false)}
        onPress={onKecamatan}
      />
      <ModalSelect
        isVisible={modalKelurahan}
        modalTitle="Kelurahan"
        list={kelurahan}
        onPressClose={() => setModalKelurahan(false)}
        onPress={onKelurahan}
      />
    </View>
  );
};

export default Soal3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg.white,
    padding: hp(2),
  },
  card: {
    borderWidth: 1,
    borderColor: colors.bg.gray,
    padding: hp(2),
    borderRadius: hp(1),
  },
});
