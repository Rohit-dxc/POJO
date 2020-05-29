package pojo.employee;

import java.beans.XMLDecoder;
import java.io.File;
import java.io.FileInputStream;
//import javax.xml.bind.JAXBContext;
//import javax.xml.bind.JAXBException;
//import javax.xml.bind.Unmarshaller;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import com.fasterxml.jackson.xml.XmlMapper;

import pojo.employee.emp.GPO;

public class App {
	// public static void main(String[] args) {
//
//		try {
//
//			File file = new File("C:\\Users\\rrohit3\\Desktop\\ADData.xml");
//			JAXBContext jaxbContext = JAXBContext.newInstance(Customer.class);
//
//			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
//			Customer customer = (Customer) jaxbUnmarshaller.unmarshal(file);
//			System.out.println(customer);
//
//		} catch (JAXBException e) {
//			e.printStackTrace();
//		}

//		 try {  
//
//             File file = new File("C:\\Users\\rrohit3\\Desktop\\ADData.xml");
//             System.out.println(file.getAbsolutePath());
//             JAXBContext jaxbContext = JAXBContext.newInstance(Customer.class);  
//             System.out.println(jaxbContext);
//             Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();  
//             Customer student= (Customer) jaxbUnmarshaller.unmarshal(file);  
//
//
//             System.out.println(student.getName());
//             
//
//
//           } catch (JAXBException e) {  
//             e.printStackTrace();  
//           }

	// }

	public static void main(String[] args) throws JAXBException {
		System.out.println("Deserializing from XML");
		// deserializeFromXML();
		// Customer c =new Customer();
//	    File file = new File("C:\\Users\\rrohit3\\Desktop\\ADData.xml");
//	    JAXBContext jaxbContext = JAXBContext.newInstance(Customer.class);
//
//	    Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
//	    Customer hdb = (Customer) jaxbUnmarshaller.unmarshal(file);
//	    System.out.println(hdb);

//		File file = new File("C:\\ADData.xml");
//		JAXBContext jaxbContext = JAXBContext.newInstance(GPO.class);
//
//		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
//		GPO customer = (GPO) jaxbUnmarshaller.unmarshal(file);
//		System.out.println(customer);

		JAXBContext jaxbContext = JAXBContext.newInstance(GPO.class);
		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		GPO gpo = (GPO) jaxbUnmarshaller.unmarshal(new File("C:\\Users\\rrohit3\\Desktop\\ADData.xml"));
		System.out.println(gpo);
		//deserializeFromXML();
	}

//	private static void deserializeFromXML() {
//		try {
//			FileInputStream fis = new FileInputStream("C:\\Users\\rrohit3\\Desktop\\ADData.xml");
//			XMLDecoder decoder = new XMLDecoder(fis);
//			String decodedSettings= (String) decoder.readObject();
//			decoder.close();
//			fis.close();
//			System.out.println(decodedSettings);
//		} catch (Exception e) {
//
//		}
//	}
}