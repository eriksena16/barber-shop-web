import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Flex, Text, Button} from '@chakra-ui/react'
import {FiUser, FiScissors} from 'react-icons/fi'
import { FaMoneyBillAlt} from 'react-icons/fa'
import { ScheduleItem } from "@/types/DashboardProps";

interface ModalInfoProps{
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
    finishService: ()=> Promise<void>;
    data: ScheduleItem;
    
}

export function ModalInfo({isOpen, onOpen, onClose, finishService, data}: ModalInfoProps){
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent bg="barber.800">
            <ModalHeader  color="white">Próximo</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody>
              <Flex align="center" mb={3}>
                <FiUser size={28} color="#ffB13e"/>
                <Text ml={3} fontSize="2xl" fontWeight="bold" color="white"> {data?.customer} </Text>
              </Flex>
              <Flex align="center" mb={3}>
                <FiScissors size={28} color="#FFF"/>
                <Text ml={3} fontSize="large" color="white"> {data?.haircut.name} </Text>
              </Flex>
              <Flex align="center" mb={3}>
                <FaMoneyBillAlt size={28} color="#46ef75"/>
                <Text ml={3} fontSize="large" fontWeight="hairline" color="white">{Number(data?.price).toFixed(2)} </Text>
              </Flex>

              <ModalFooter>
                <Button
                bg="barber.600"
                _hover={{bg: "#F2C94C"}}
                color="white"
                mr = {3}
                onClick={()=> finishService()}>
                    Finalizar Serviço
                </Button>
              </ModalFooter>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    );
}