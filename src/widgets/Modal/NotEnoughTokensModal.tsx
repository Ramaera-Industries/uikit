import styled, { useTheme } from "styled-components";
import getThemeValue from "../../util/getThemeValue";
import Modal from "./Modal";
import { Link, Text, Button, OpenNewIcon } from "../../components";

interface NotEnoughTokensModalProps {
  tokenSymbol: string;
  onDismiss?: () => void;
}

const StyledLink = styled(Link)`
  width: 100%;
`;

const NotEnoughTokensModal: React.FC<React.PropsWithChildren<NotEnoughTokensModalProps>> = ({
  tokenSymbol,
  onDismiss,
}) => {
  const theme = useTheme();

  return (
    <Modal
      title={"BTC required"}
      onDismiss={onDismiss}
      headerBackground={getThemeValue(theme, "colors.gradientCardHeader")}
    >
      <Text color="failure" bold>
      Insufficient      </Text>
      <Text mt="24px">{"You’ll need  to stake in this pool!"}</Text>
      <Text>
      Buy some %symbol%, or make sure your
      </Text>
      <Button mt="24px" as="a" external href="/swap">
      Buy {tokenSymbol}
      </Button>
      <StyledLink href="https://yieldwatch.net" external>
        <Button variant="secondary" mt="8px" width="100%">
        Locate
          <OpenNewIcon color="primary" ml="4px" />
        </Button>
      </StyledLink>
      <Button variant="text" onClick={onDismiss}>
      Close Window
      </Button>
    </Modal>
  );
};

export default NotEnoughTokensModal;
