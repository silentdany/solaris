export const RarityBadge = ({ rarity }) => {
  return (
    <div className="flex items-center justify-end px-8">
      <div
        className={`w-full border-b-4 bg-gradient-to-t py-1 ${
          rarity === 'common' && 'border-common from-common/10'
        } ${rarity === 'uncommon' && 'border-uncommon from-uncommon/10'} ${
          rarity === 'rare' && 'border-rare from-rare/10'
        } ${rarity === 'epic' && 'border-epic from-epic/10'} ${
          rarity === 'legendary' && 'border-legendary from-legendary/10'
        } ${rarity === 'anomaly' && 'border-anomaly from-anomaly/10'}`}
      >
        {rarity}
      </div>
    </div>
  );
};
