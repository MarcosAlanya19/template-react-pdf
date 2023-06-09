import { Document, Page, Text, View } from '@react-pdf/renderer';
import { FC } from 'react';

export const PDFContent: FC = () => {
  const orderData = {
    orderNumber: '123456',
    date: 'June 9, 2023',
    items: [
      { name: 'Item 1', quantity: 2, price: 10 },
      { name: 'Item 2', quantity: 3, price: 15 },
      { name: 'Item 3', quantity: 1, price: 20 },
    ],
    total: 85,
  };

  return (
    <Document>
      <Page>
        <View style={{ margin: 20, fontSize: 12 }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              ORDEN DE COMPRA 9999
            </Text>

            <View style={{ marginVertical: 5 }}>
              <Text>Razon Social: Citrica Comunicacion Grafica</Text>
              <Text>Domicilio Fiscal: Calle todos los santo</Text>
            </View>

            <View style={{ border: 1 }}>
              <Text
                style={{ padding: 5, fontWeight: 'bold', borderBottom: 1 }}
              >
                Order de Compra
              </Text>
              <View style={{padding:5}}>
                <Text>Date: {orderData.date}</Text>
                <Text>Numero de orden de compra: {orderData.orderNumber}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: '#000',
              }}
            >
              <View style={{ flex: 1 }}>
                <Text>Name</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Quantity</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Price</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Subtotal</Text>
              </View>
            </View>

            {orderData.items.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#000',
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{item.quantity}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{item.price}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{item.quantity * item.price}</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
            Total: ${orderData.total}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
